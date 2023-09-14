import { Axios } from '@/services/Axios';
import { columns } from '@/utils/Columns';
import { DataTable } from '@/utils/Data-Table';
import { useEffect, useState } from 'react';
import { RiAddBoxFill } from 'react-icons/ri';
import { Filter } from '../utils/Filter';
import { Modal } from '../utils/Modal';
import { Header } from "./components/Header";


export function BudgetTable() {
  const [showFilter, setShowFilter] = useState(false);
  const [data, setData] = useState([]);

  showFilter;

  useEffect(() => {
    async function fetchData() {
      try {
        const spreadsheetId = '1L7DlUwnk8FJmAa3PlgXyh4OBecJtSNpxlMW5RFEtguk';
        const range = 'Transactions!A:E';
        const API_KEY = 'AIzaSyBV067z8N6cvECEjuAq546XtgPOf0TSW2Y'
        const apiURL = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${API_KEY}`;
        const response = await Axios.get(apiURL);

        const resultData = response.data.values;
        console.log(resultData)
        if (resultData.length > 1) {
          const headers = resultData[0];
          const values = resultData.slice(1);

          const transformedData = values.map((valueRow: string[]) => {
            let obj: Record<string, string> = {};
            headers.forEach((header: string, index: number) => {
              obj[header] = valueRow[index];
            });
            return obj;
          });

          setData(transformedData);
          console.log(transformedData);
        }

      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Header
        classname="flex items-center p-3 w-[90%] mb-4 bg-[#1E1E1E] rounded-r-full"
        title="Bugdet"
        onClick={() => setShowFilter(prev => !prev)}>
        <div className='flex items-center gap-4'>
          <Modal onClose={() => setShowFilter(false)}>
            <RiAddBoxFill className="cursor-pointer w-7 h-7 mt-1" />
          </Modal>
          <Filter />
        </div>
      </Header>

      <DataTable columns={columns} data={data} />
    </>
  )
}