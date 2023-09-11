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

  useEffect(() => {
    async function fetchData() {
      try {
        const apiURL = 'https://sheet2api.com/v1/s0CsA8nqRyu6/pbp-finance-management/Transactions';
        const response = await Axios.get(apiURL);

        if (response.status === 200) {
          setData(response.data);
        console.log(response.data)

        }
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
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
      {/* <table className="flex relative flex-col border-collapse overflow-x-hidden overflow-y-auto scrollbar scrollbar-thumb-[#636369] scrollbar-track-transparent">
        <thead className="sticky flex items-center h-20 top-0 w-full drop-shadow-lg  bg-[#1E1E1E]">
          <tr className="flex items-center justify-between h-full w-full">
            <th className="px-4 w-[50%] text-base font-medium">Description</th>
            <th className="px-4 w-[50%] text-base font-medium">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr
            className={`flex text-left items-center text-sm min-h-[3rem] border-b outline-none`}>
            <td className="px-4 w-[70%]">Salarie</td>
            <td className="px-0 w-[35%]">$ 72,000</td>
          </tr>
        </tbody>
      </table> */}
    </>
  )
}