import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Axios, GoogleSheetsAxios } from "@/services/Axios";
import { Label } from "@radix-ui/react-dropdown-menu";
import React, { ReactNode, useState } from "react";
import { SelectCategory } from "./Select";

interface FilterModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  children?: ReactNode;
}

export const Modal: React.FC<FilterModalProps> = ({ isOpen, onClose, children }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [category, setCategory] = useState<string>('');

  const handleCategoryChange = (selectedCategory: string) => {
    setCategory(selectedCategory);
  }

  async function getNumberOfTransactions() {
    const spreadsheetId = '1L7DlUwnk8FJmAa3PlgXyh4OBecJtSNpxlMW5RFEtguk';
    const range = 'Transactions!A:E';
    const API_KEY = 'AIzaSyBV067z8N6cvECEjuAq546XtgPOf0TSW2Y'
    const api = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${API_KEY}`;
    try {
      const response = await Axios.get(api);
      if (response.data && Array.isArray(response.data)) {
        return response.data.length;
      }
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
    return 0;
  }

  async function handleAdd(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const spreadsheetId = '1L7DlUwnk8FJmAa3PlgXyh4OBecJtSNpxlMW5RFEtguk';
    const range = 'Transactions!A:E';
    const API_KEY = 'AIzaSyBV067z8N6cvECEjuAq546XtgPOf0TSW2Y'
    const api = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}:append?A:E=RAW`;

    const currentTransactionsCount = await getNumberOfTransactions();
    const newID = (currentTransactionsCount + 1).toString();

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    const transactionData = {
      id: newID,
      description: description,
      value: parseFloat(value),
      category: category,
      date: formattedDate
    };

    try {
      const response = await GoogleSheetsAxios.post(api, transactionData);
      if (response.status === 200 || response.status === 201) {
        setDescription("");
        setValue("");
        onClose?.();
      } else {
        console.error("Erro ao adicionar a transação", response.data);
      }
    } catch (error) {
      console.error("Falha ao adicionar a transação:", error);
    }
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[300px] bg-[#161616] outline-none border-[#505050]">
          <DialogHeader>
            <DialogTitle>New Transaction</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleAdd}>
            <div className="grid gap-4 py-4">
              <div className="flex flex-col mb-12 gap-6">

                <SelectCategory onCategoryChange={handleCategoryChange} />

                <div className="flex flex-col gap-3">
                  <Label>Description</Label>
                  <Input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    className="outline-none border-[#505050]"
                    autoComplete="off"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <Label>Value</Label>
                  <Input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Value"
                    className="outline-none border-[#505050]"
                    autoComplete="off"
                  />
                </div>

              </div>
              <DialogFooter className="absolute right-6 bottom-5">
                <button
                  className="bg-zinc-400 p-1 rounded-lg px-3 text-black transition-all hover:bg-zinc-200"
                  type="submit">
                  Adicionar
                </button>
              </DialogFooter>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};
