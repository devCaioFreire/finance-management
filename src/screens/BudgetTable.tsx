import { useState } from 'react';
import { Header } from "../components/Header";
import { Filter } from '../utils/Filter';

export function BudgetTable() {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Total Earning');

  return (
    <>
      <Header
        classname="flex items-center p-3 w-[90%] mb-4 bg-[#1E1E1E] rounded-r-full"
        title="Bugdet"
        onClick={() => setShowFilter(prev => !prev)}>
        <Filter/>
      </Header>
      <table className="flex relative flex-col border-collapse overflow-x-hidden overflow-y-auto scrollbar scrollbar-thumb-[#636369] scrollbar-track-transparent">
        <thead className="sticky flex items-center h-20 top-0 w-full drop-shadow-lg  bg-[#1E1E1E]">
          <tr className="flex items-center justify-between h-full w-full">
            <th className="px-4 w-[50%] text-base font-medium">Descrição</th>
            <th className="px-4 w-[50%] text-base font-medium">Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr
            className={`flex text-left items-center text-sm min-h-[3rem] border-b outline-none`}>
            <td className="px-4 w-[60%]">Salarie</td>
            <td className="px-6 w-[40%]">$ 72,000</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}