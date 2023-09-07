import { useEffect, useState } from 'react';
import { Axios } from '../services/Axios';
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { Chart } from "./components/Chart";
import { CreditCard } from "./components/CreditCard";
import { Header } from './components/Header';
import { Slide } from "./components/swiper";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await Axios.get('/v1/s0CsA8nqRyu6/pbp-finance-management');
        setData(response.data[0]);
        console.log(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-col ml-4 sm:gap-16 md:gap-14">

      <div
        className="sm:hidden 
          md:flex p-4 mr-4 mt-4 bg-[#1E1E1E] rounded">
        <Header title='Finance Management' />
      </div>

      <div className="md:hidden">
        <CreditCard transactions={12} balance={data && data['Balance']} />
      </div>

      <div className="sm:hidden 
        md:block absolute right-4 top-[16.8%] h-[19rem] w-[18rem] pt-8 rounded-xl bg-[#1C1D24]
        xl:h-0 xl:pt-0 xl:bg-transparent xl:top-[11.8%]
        2xl:top-[10%]">
        <h1 className="text-2xl font-bold px-4 xl:hidden">My Acconut Bank</h1>
        <CreditCard transactions={12} balance={data && data['Balance']} />
      </div>

      <div className="flex flex-row w-full gap-4 md:hidden">
        <Slide>
          {data &&
            Object.keys(data).map((key, index) => (
              <Card
                key={index}
                title={key}
                value={`$ ${data[key]}`}
                color={key === "Total Earning"}
              />
            ))
          }
        </Slide>
      </div>

      <div className="sm:hidden 
        md:grid grid-cols-2 gap-4 mr-80
        lg:grid-cols-3
        xl:grid-cols-4">
        {data &&
          Object.keys(data).map((key, index) => (
            <Card
              key={index}
              title={key}
              value={`$ ${data[key]}`}
              color={key === "Total Earning"}
            />
          ))
        }
      </div>

      <div className="flex flex-col gap-4 mr-4">
        <h1 className="text-2xl font-bold">Analitcs Reports</h1>
        <Chart />
      </div>

      <Button link='/budget' title="All spending" className="text-sm text-center font-medium py-2 mr-4 md:mb-4 bg-[#1E1E1E] rounded-md" />
    </div>
  )
}