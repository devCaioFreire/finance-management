import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
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

  async function handleAdd(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    setDescription("");
    setValue("");
    onClose?.();
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

                <SelectCategory />

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
                <button className="bg-slate-100 p-1 rounded-lg px-3 text-black"
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
