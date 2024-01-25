import * as React from "react";
import "../../css/style.css"; // Adjust the path based on your actual file structure


function ItemCards(props) {
  return (
    <div className="flex max-w-[885px] flex-col items-stretch">
      <div className="w-full px-5 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
            <div className="flex-col overflow-hidden relative flex aspect-[0.7464788732394366] w-[212px] grow py-1 items-end max-md:mt-3">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/41ec096cb8080001be566e39119d8333f7f4acd710d7d87c1ae5e5678c426fbc?apiKey=d7e39ab895184392b1b6046142cca9e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/41ec096cb8080001be566e39119d8333f7f4acd710d7d87c1ae5e5678c426fbc?apiKey=d7e39ab895184392b1b6046142cca9e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/41ec096cb8080001be566e39119d8333f7f4acd710d7d87c1ae5e5678c426fbc?apiKey=d7e39ab895184392b1b6046142cca9e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/41ec096cb8080001be566e39119d8333f7f4acd710d7d87c1ae5e5678c426fbc?apiKey=d7e39ab895184392b1b6046142cca9e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/41ec096cb8080001be566e39119d8333f7f4acd710d7d87c1ae5e5678c426fbc?apiKey=d7e39ab895184392b1b6046142cca9e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/41ec096cb8080001be566e39119d8333f7f4acd710d7d87c1ae5e5678c426fbc?apiKey=d7e39ab895184392b1b6046142cca9e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/41ec096cb8080001be566e39119d8333f7f4acd710d7d87c1ae5e5678c426fbc?apiKey=d7e39ab895184392b1b6046142cca9e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/41ec096cb8080001be566e39119d8333f7f4acd710d7d87c1ae5e5678c426fbc?apiKey=d7e39ab895184392b1b6046142cca9e3&"
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5c240299f2fa45ffdf622f1f61db6e25d2381d833042f8128710d9ecadf98ce?apiKey=d7e39ab895184392b1b6046142cca9e3&"
                className="aspect-[0.82] object-contain object-center w-8 overflow-hidden max-w-full"
              />
              <div className="relative fill-[linear-gradient(0deg,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0.00)_100%)] self-stretch flex shrink-0 h-5 flex-col mt-56 max-md:mt-10" />
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex-col overflow-hidden relative flex aspect-[0.75] w-[213px] grow py-1 items-end max-md:mt-3">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bcd9c1ba3b7ff421f703ff7b78a846a0adc32771c3bcacdf0f0a0a1d788b0794?apiKey=d7e39ab895184392b1b6046142cca9e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcd9c1ba3b7ff421f703ff7b78a846a0adc32771c3bcacdf0f0a0a1d788b0794?apiKey=d7e39ab895184392b1b6046142cca9e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcd9c1ba3b7ff421f703ff7b78a846a0adc32771c3bcacdf0f0a0a1d788b0794?apiKey=d7e39ab895184392b1b6046142cca9e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcd9c1ba3b7ff421f703ff7b78a846a0adc32771c3bcacdf0f0a0a1d788b0794?apiKey=d7e39ab895184392b1b6046142cca9e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcd9c1ba3b7ff421f703ff7b78a846a0adc32771c3bcacdf0f0a0a1d788b0794?apiKey=d7e39ab895184392b1b6046142cca9e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcd9c1ba3b7ff421f703ff7b78a846a0adc32771c3bcacdf0f0a0a1d788b0794?apiKey=d7e39ab895184392b1b6046142cca9e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcd9c1ba3b7ff421f703ff7b78a846a0adc32771c3bcacdf0f0a0a1d788b0794?apiKey=d7e39ab895184392b1b6046142cca9e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcd9c1ba3b7ff421f703ff7b78a846a0adc32771c3bcacdf0f0a0a1d788b0794?apiKey=d7e39ab895184392b1b6046142cca9e3&"
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7ca07fe399cff153ac7221ceb9a7e70267d059d4726850b3d9eea71a23cfae2?apiKey=d7e39ab895184392b1b6046142cca9e3&"
                className="aspect-[0.82] object-contain object-center w-8 overflow-hidden max-w-full"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1747d40bc23ca03de98d71555401d2d52973c1621bd61d42cbcd4d835e30df1?apiKey=d7e39ab895184392b1b6046142cca9e3&"
                className="aspect-[10.65] object-contain object-center w-full fill-[linear-gradient(0deg,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0.00)_100%)] overflow-hidden self-center mt-56 max-md:mt-10"
              />
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex-col overflow-hidden relative flex aspect-[0.7464788732394366] w-[212px] grow items-center pt-12 px-1 max-md:mt-3">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2701e14e9f7d9a51523a47ea657bd310663e38e4cc4441d7141ef15e2ebaca80?apiKey=d7e39ab895184392b1b6046142cca9e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2701e14e9f7d9a51523a47ea657bd310663e38e4cc4441d7141ef15e2ebaca80?apiKey=d7e39ab895184392b1b6046142cca9e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2701e14e9f7d9a51523a47ea657bd310663e38e4cc4441d7141ef15e2ebaca80?apiKey=d7e39ab895184392b1b6046142cca9e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2701e14e9f7d9a51523a47ea657bd310663e38e4cc4441d7141ef15e2ebaca80?apiKey=d7e39ab895184392b1b6046142cca9e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2701e14e9f7d9a51523a47ea657bd310663e38e4cc4441d7141ef15e2ebaca80?apiKey=d7e39ab895184392b1b6046142cca9e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2701e14e9f7d9a51523a47ea657bd310663e38e4cc4441d7141ef15e2ebaca80?apiKey=d7e39ab895184392b1b6046142cca9e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2701e14e9f7d9a51523a47ea657bd310663e38e4cc4441d7141ef15e2ebaca80?apiKey=d7e39ab895184392b1b6046142cca9e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2701e14e9f7d9a51523a47ea657bd310663e38e4cc4441d7141ef15e2ebaca80?apiKey=d7e39ab895184392b1b6046142cca9e3&"
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1c1b449da891c6b5c67ff603706f37302cff57d4bfbf1ffa87e0eb1921d889d?apiKey=d7e39ab895184392b1b6046142cca9e3&"
                className="aspect-[10.3] object-contain object-center w-full fill-[linear-gradient(0deg,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0.00)_100%)] overflow-hidden mt-52 max-md:mt-10"
              />
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex-col overflow-hidden relative flex aspect-[0.7464788732394366] w-[212px] grow items-center pt-12 px-1 max-md:mt-3">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/231d4ca5b7ee6330996830805da6107473672d5ec5374db8291a1a8c684335cf?apiKey=d7e39ab895184392b1b6046142cca9e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/231d4ca5b7ee6330996830805da6107473672d5ec5374db8291a1a8c684335cf?apiKey=d7e39ab895184392b1b6046142cca9e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/231d4ca5b7ee6330996830805da6107473672d5ec5374db8291a1a8c684335cf?apiKey=d7e39ab895184392b1b6046142cca9e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/231d4ca5b7ee6330996830805da6107473672d5ec5374db8291a1a8c684335cf?apiKey=d7e39ab895184392b1b6046142cca9e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/231d4ca5b7ee6330996830805da6107473672d5ec5374db8291a1a8c684335cf?apiKey=d7e39ab895184392b1b6046142cca9e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/231d4ca5b7ee6330996830805da6107473672d5ec5374db8291a1a8c684335cf?apiKey=d7e39ab895184392b1b6046142cca9e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/231d4ca5b7ee6330996830805da6107473672d5ec5374db8291a1a8c684335cf?apiKey=d7e39ab895184392b1b6046142cca9e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/231d4ca5b7ee6330996830805da6107473672d5ec5374db8291a1a8c684335cf?apiKey=d7e39ab895184392b1b6046142cca9e3&"
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d36dda6129a01396eab61465f4e36dc2021c2474515255a96fb0a82ec7be68e?apiKey=d7e39ab895184392b1b6046142cca9e3&"
                className="aspect-[10.3] object-contain object-center w-full fill-[linear-gradient(0deg,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0.00)_100%)] overflow-hidden mt-52 max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full items-start justify-between gap-5 mt-2 px-5 max-md:max-w-full max-md:flex-wrap">
        <span className="self-center flex basis-[0%] flex-col items-stretch my-auto">
          <div className="justify-center text-gray-800 text-base font-bold leading-5 whitespace-nowrap">
            10€/Dia
          </div>
          <div className="justify-center text-gray-800 text-sm leading-5 whitespace-nowrap mt-4">
            Herramientas
          </div>
        </span>
        <div className="self-stretch flex justify-between gap-3 items-start">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5edfabf67897c7179f94a9144c3984de72a4ce9b894464ddb1561686aa0bcf6?apiKey=d7e39ab895184392b1b6046142cca9e3&"
            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
          />
          <span className="flex grow basis-[0%] flex-col items-stretch mt-1">
            <div className="justify-center text-gray-800 text-base font-bold leading-5">
              10€/Dia
            </div>
            <div className="justify-center text-gray-800 text-sm leading-5 whitespace-nowrap mt-4">
              Herramientas de trabajo.
            </div>
          </span>
        </div>
        <div className="flex gap-3 self-start items-start">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/28a849d497718d5a02ca5b55c5fdb0e502cc1fbf96c656392fc91a0b603a2f8b?apiKey=d7e39ab895184392b1b6046142cca9e3&"
            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
          />
          <span className="flex grow basis-[0%] flex-col items-stretch mt-1">
            <div className="justify-center text-gray-800 text-base font-bold leading-5">
              10€/Dia
            </div>
            <div className="justify-center text-gray-800 text-sm leading-5 whitespace-nowrap mt-4">
              Herramientas NUEVAS
            </div>
          </span>
        </div>
        <div className="flex gap-3 self-start items-start">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/24319e003d5315553818cce999bc70aa2466527465d59e7bf0c773befc750e02?apiKey=d7e39ab895184392b1b6046142cca9e3&"
            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
          />
          <span className="flex grow basis-[0%] flex-col items-stretch mt-1">
            <div className="justify-center text-gray-800 text-base font-bold leading-5">
              10€/Dia
            </div>
            <div className="justify-center text-gray-800 text-sm leading-5 whitespace-nowrap mt-4">
              Herramientas NUEVAS
            </div>
          </span>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0599b7f8a19095b59702478d36704736f2e0c7a5e7884cbbbdef2d6882cd0cb?apiKey=d7e39ab895184392b1b6046142cca9e3&"
          className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full self-start"
        />
      </div>
      <div className="w-full mt-24 px-5 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
            <div className="flex-col overflow-hidden relative flex aspect-[0.7464788732394366] w-[212px] grow items-center pt-12 px-1 max-md:mt-3">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/35e612dcb3f1435dcf2e708fee9f89fd50e684dfd993b9a0af158f48647e88a7?apiKey=d7e39ab895184392b1b6046142cca9e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/35e612dcb3f1435dcf2e708fee9f89fd50e684dfd993b9a0af158f48647e88a7?apiKey=d7e39ab895184392b1b6046142cca9e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35e612dcb3f1435dcf2e708fee9f89fd50e684dfd993b9a0af158f48647e88a7?apiKey=d7e39ab895184392b1b6046142cca9e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/35e612dcb3f1435dcf2e708fee9f89fd50e684dfd993b9a0af158f48647e88a7?apiKey=d7e39ab895184392b1b6046142cca9e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/35e612dcb3f1435dcf2e708fee9f89fd50e684dfd993b9a0af158f48647e88a7?apiKey=d7e39ab895184392b1b6046142cca9e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35e612dcb3f1435dcf2e708fee9f89fd50e684dfd993b9a0af158f48647e88a7?apiKey=d7e39ab895184392b1b6046142cca9e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/35e612dcb3f1435dcf2e708fee9f89fd50e684dfd993b9a0af158f48647e88a7?apiKey=d7e39ab895184392b1b6046142cca9e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/35e612dcb3f1435dcf2e708fee9f89fd50e684dfd993b9a0af158f48647e88a7?apiKey=d7e39ab895184392b1b6046142cca9e3&"
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce31de7673bec48fb9add0e9a4085b66230697ddde812f1118fbba8253bf086c?apiKey=d7e39ab895184392b1b6046142cca9e3&"
                className="aspect-[10.3] object-contain object-center w-full fill-[linear-gradient(0deg,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0.00)_100%)] overflow-hidden mt-52 max-md:mt-10"
              />
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex-col overflow-hidden relative flex aspect-[0.75] w-[213px] grow py-1 items-end max-md:mt-3">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b2fdf322d0635e8e8f6853d3e0f96d0673c24954bb31a21b4925aa0003edb65b?apiKey=d7e39ab895184392b1b6046142cca9e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2fdf322d0635e8e8f6853d3e0f96d0673c24954bb31a21b4925aa0003edb65b?apiKey=d7e39ab895184392b1b6046142cca9e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2fdf322d0635e8e8f6853d3e0f96d0673c24954bb31a21b4925aa0003edb65b?apiKey=d7e39ab895184392b1b6046142cca9e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2fdf322d0635e8e8f6853d3e0f96d0673c24954bb31a21b4925aa0003edb65b?apiKey=d7e39ab895184392b1b6046142cca9e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2fdf322d0635e8e8f6853d3e0f96d0673c24954bb31a21b4925aa0003edb65b?apiKey=d7e39ab895184392b1b6046142cca9e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2fdf322d0635e8e8f6853d3e0f96d0673c24954bb31a21b4925aa0003edb65b?apiKey=d7e39ab895184392b1b6046142cca9e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2fdf322d0635e8e8f6853d3e0f96d0673c24954bb31a21b4925aa0003edb65b?apiKey=d7e39ab895184392b1b6046142cca9e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2fdf322d0635e8e8f6853d3e0f96d0673c24954bb31a21b4925aa0003edb65b?apiKey=d7e39ab895184392b1b6046142cca9e3&"
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/32c3c85384ffbeaa63f6a33e5dd9f401bd9238ee406bcc2c8aacb71a4d14316e?apiKey=d7e39ab895184392b1b6046142cca9e3&"
                className="aspect-[0.82] object-contain object-center w-8 overflow-hidden max-w-full"
              />
              <div className="relative fill-[linear-gradient(0deg,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0.00)_100%)] self-stretch flex shrink-0 h-5 flex-col mt-56 max-md:mt-10" />
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex-col overflow-hidden relative flex aspect-[0.7464788732394366] w-[212px] grow py-1 items-end max-md:mt-3">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/122e386588eb75bf13cb2d25824031d3fada8670052a8ee46f88d443d784b30d?apiKey=d7e39ab895184392b1b6046142cca9e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/122e386588eb75bf13cb2d25824031d3fada8670052a8ee46f88d443d784b30d?apiKey=d7e39ab895184392b1b6046142cca9e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/122e386588eb75bf13cb2d25824031d3fada8670052a8ee46f88d443d784b30d?apiKey=d7e39ab895184392b1b6046142cca9e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/122e386588eb75bf13cb2d25824031d3fada8670052a8ee46f88d443d784b30d?apiKey=d7e39ab895184392b1b6046142cca9e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/122e386588eb75bf13cb2d25824031d3fada8670052a8ee46f88d443d784b30d?apiKey=d7e39ab895184392b1b6046142cca9e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/122e386588eb75bf13cb2d25824031d3fada8670052a8ee46f88d443d784b30d?apiKey=d7e39ab895184392b1b6046142cca9e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/122e386588eb75bf13cb2d25824031d3fada8670052a8ee46f88d443d784b30d?apiKey=d7e39ab895184392b1b6046142cca9e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/122e386588eb75bf13cb2d25824031d3fada8670052a8ee46f88d443d784b30d?apiKey=d7e39ab895184392b1b6046142cca9e3&"
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4b2a4baf5933d19b2987fe65cb823262e14d21387cba7dc93e0d4721d1e440c?apiKey=d7e39ab895184392b1b6046142cca9e3&"
                className="aspect-[0.82] object-contain object-center w-8 overflow-hidden max-w-full"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ee74557f95e056d347310578c2f8d8b802842a51218cd3e448e29ac76ef56c9?apiKey=d7e39ab895184392b1b6046142cca9e3&"
                className="aspect-[10.6] object-contain object-center w-full fill-[linear-gradient(0deg,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0.00)_100%)] overflow-hidden self-center mt-56 max-md:mt-10"
              />
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex-col overflow-hidden relative flex aspect-[0.7464788732394366] w-[212px] grow py-1 items-end max-md:mt-3">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d9efa93de01eb42ecf0cc58ddd17c95ed3b650f0f6134c3255ef880305b4e073?apiKey=d7e39ab895184392b1b6046142cca9e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d9efa93de01eb42ecf0cc58ddd17c95ed3b650f0f6134c3255ef880305b4e073?apiKey=d7e39ab895184392b1b6046142cca9e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d9efa93de01eb42ecf0cc58ddd17c95ed3b650f0f6134c3255ef880305b4e073?apiKey=d7e39ab895184392b1b6046142cca9e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d9efa93de01eb42ecf0cc58ddd17c95ed3b650f0f6134c3255ef880305b4e073?apiKey=d7e39ab895184392b1b6046142cca9e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d9efa93de01eb42ecf0cc58ddd17c95ed3b650f0f6134c3255ef880305b4e073?apiKey=d7e39ab895184392b1b6046142cca9e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d9efa93de01eb42ecf0cc58ddd17c95ed3b650f0f6134c3255ef880305b4e073?apiKey=d7e39ab895184392b1b6046142cca9e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d9efa93de01eb42ecf0cc58ddd17c95ed3b650f0f6134c3255ef880305b4e073?apiKey=d7e39ab895184392b1b6046142cca9e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d9efa93de01eb42ecf0cc58ddd17c95ed3b650f0f6134c3255ef880305b4e073?apiKey=d7e39ab895184392b1b6046142cca9e3&"
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/848afe3263ae9fcb712dbc76b60d59443cd91a342dd1e216f88800c5985ec7c2?apiKey=d7e39ab895184392b1b6046142cca9e3&"
                className="aspect-[0.82] object-contain object-center w-8 overflow-hidden max-w-full"
              />
              <div className="relative fill-[linear-gradient(0deg,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0.00)_100%)] self-stretch flex shrink-0 h-5 flex-col mt-56 max-md:mt-10" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full items-start justify-between gap-5 mt-2 px-5 max-md:max-w-full max-md:flex-wrap">
        <div className="flex justify-between gap-5 self-start items-start">
          <span className="flex grow basis-[0%] flex-col items-stretch mt-1">
            <div className="justify-center text-gray-800 text-base font-bold leading-5">
              10€/Dia
            </div>
            <div className="justify-center text-gray-800 text-sm leading-5 whitespace-nowrap mt-4">
              Herramientas Nuevas
            </div>
          </span>
          <span className="self-stretch flex grow basis-[0%] flex-col items-stretch">
            <span className="flex items-stretch justify-between gap-3">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5edfabf67897c7179f94a9144c3984de72a4ce9b894464ddb1561686aa0bcf6?apiKey=d7e39ab895184392b1b6046142cca9e3&"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className="justify-center text-gray-800 text-base font-bold leading-5 self-center grow whitespace-nowrap my-auto">
                10€/Dia
              </div>
            </span>
            <div className="justify-center text-gray-800 text-sm leading-5 whitespace-nowrap mt-2.5 self-end">
              Herramientas
            </div>
          </span>
        </div>
        <span className="flex basis-[0%] flex-col items-stretch self-start">
          <span className="flex items-stretch justify-between gap-3">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/28a849d497718d5a02ca5b55c5fdb0e502cc1fbf96c656392fc91a0b603a2f8b?apiKey=d7e39ab895184392b1b6046142cca9e3&"
              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
            />
            <div className="justify-center text-gray-800 text-base font-bold leading-5 self-center grow whitespace-nowrap my-auto">
              10€/Dia
            </div>
          </span>
          <div className="justify-center text-gray-800 text-sm leading-5 whitespace-nowrap mt-2.5 self-end">
            Herramientas
          </div>
        </span>
        <div className="self-stretch flex justify-between gap-3 items-start">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/24319e003d5315553818cce999bc70aa2466527465d59e7bf0c773befc750e02?apiKey=d7e39ab895184392b1b6046142cca9e3&"
            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
          />
          <span className="flex grow basis-[0%] flex-col items-stretch mt-1">
            <div className="justify-center text-gray-800 text-base font-bold leading-5">
              10€/Dia
            </div>
            <div className="justify-center text-gray-800 text-sm leading-5 whitespace-nowrap mt-4">
              herramienta antigua
            </div>
          </span>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0599b7f8a19095b59702478d36704736f2e0c7a5e7884cbbbdef2d6882cd0cb?apiKey=d7e39ab895184392b1b6046142cca9e3&"
          className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full self-start"
        />
      </div>
      <div className="w-full mt-24 px-5 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
            <div className="flex-col overflow-hidden relative flex aspect-[0.7464788732394366] w-[212px] grow py-1 items-end max-md:mt-3">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/74f33b1827ed8c90527246ec304ffcab1a84d4b4b1d94205cd70a25f66c059be?apiKey=d7e39ab895184392b1b6046142cca9e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/74f33b1827ed8c90527246ec304ffcab1a84d4b4b1d94205cd70a25f66c059be?apiKey=d7e39ab895184392b1b6046142cca9e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/74f33b1827ed8c90527246ec304ffcab1a84d4b4b1d94205cd70a25f66c059be?apiKey=d7e39ab895184392b1b6046142cca9e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/74f33b1827ed8c90527246ec304ffcab1a84d4b4b1d94205cd70a25f66c059be?apiKey=d7e39ab895184392b1b6046142cca9e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/74f33b1827ed8c90527246ec304ffcab1a84d4b4b1d94205cd70a25f66c059be?apiKey=d7e39ab895184392b1b6046142cca9e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/74f33b1827ed8c90527246ec304ffcab1a84d4b4b1d94205cd70a25f66c059be?apiKey=d7e39ab895184392b1b6046142cca9e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/74f33b1827ed8c90527246ec304ffcab1a84d4b4b1d94205cd70a25f66c059be?apiKey=d7e39ab895184392b1b6046142cca9e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/74f33b1827ed8c90527246ec304ffcab1a84d4b4b1d94205cd70a25f66c059be?apiKey=d7e39ab895184392b1b6046142cca9e3&"
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8180105d512bb13f1b88ff653db914aa83516d6aa1238f04785b7fb8c7c0bd6d?apiKey=d7e39ab895184392b1b6046142cca9e3&"
                className="aspect-[0.82] object-contain object-center w-8 overflow-hidden max-w-full"
              />
              <div className="relative fill-[linear-gradient(0deg,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0.00)_100%)] self-stretch flex shrink-0 h-5 flex-col mt-56 max-md:mt-10" />
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex-col overflow-hidden relative flex aspect-[0.7464788732394366] w-[212px] grow py-1 items-end max-md:mt-3">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/32949aa72669a0438c7f0127fe7b04f1fad68216919d59e96fae130db1f0d5ce?apiKey=d7e39ab895184392b1b6046142cca9e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/32949aa72669a0438c7f0127fe7b04f1fad68216919d59e96fae130db1f0d5ce?apiKey=d7e39ab895184392b1b6046142cca9e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/32949aa72669a0438c7f0127fe7b04f1fad68216919d59e96fae130db1f0d5ce?apiKey=d7e39ab895184392b1b6046142cca9e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/32949aa72669a0438c7f0127fe7b04f1fad68216919d59e96fae130db1f0d5ce?apiKey=d7e39ab895184392b1b6046142cca9e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/32949aa72669a0438c7f0127fe7b04f1fad68216919d59e96fae130db1f0d5ce?apiKey=d7e39ab895184392b1b6046142cca9e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/32949aa72669a0438c7f0127fe7b04f1fad68216919d59e96fae130db1f0d5ce?apiKey=d7e39ab895184392b1b6046142cca9e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/32949aa72669a0438c7f0127fe7b04f1fad68216919d59e96fae130db1f0d5ce?apiKey=d7e39ab895184392b1b6046142cca9e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/32949aa72669a0438c7f0127fe7b04f1fad68216919d59e96fae130db1f0d5ce?apiKey=d7e39ab895184392b1b6046142cca9e3&"
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e025216effd3d8c8eb33ab4c10209e238fdc878f417a16484b6b8add46cf71c?apiKey=d7e39ab895184392b1b6046142cca9e3&"
                className="aspect-[0.82] object-contain object-center w-8 overflow-hidden max-w-full"
              />
              <div className="relative fill-[linear-gradient(0deg,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0.00)_100%)] self-stretch flex shrink-0 h-5 flex-col mt-56 max-md:mt-10" />
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex-col overflow-hidden relative flex aspect-[0.7464788732394366] w-[212px] grow py-1 items-end max-md:mt-3">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ef8d55e747f385d38c78a81bb0ef83ea9b885337b3039c25e644efe5caa24c69?apiKey=d7e39ab895184392b1b6046142cca9e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef8d55e747f385d38c78a81bb0ef83ea9b885337b3039c25e644efe5caa24c69?apiKey=d7e39ab895184392b1b6046142cca9e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef8d55e747f385d38c78a81bb0ef83ea9b885337b3039c25e644efe5caa24c69?apiKey=d7e39ab895184392b1b6046142cca9e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef8d55e747f385d38c78a81bb0ef83ea9b885337b3039c25e644efe5caa24c69?apiKey=d7e39ab895184392b1b6046142cca9e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef8d55e747f385d38c78a81bb0ef83ea9b885337b3039c25e644efe5caa24c69?apiKey=d7e39ab895184392b1b6046142cca9e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef8d55e747f385d38c78a81bb0ef83ea9b885337b3039c25e644efe5caa24c69?apiKey=d7e39ab895184392b1b6046142cca9e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef8d55e747f385d38c78a81bb0ef83ea9b885337b3039c25e644efe5caa24c69?apiKey=d7e39ab895184392b1b6046142cca9e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef8d55e747f385d38c78a81bb0ef83ea9b885337b3039c25e644efe5caa24c69?apiKey=d7e39ab895184392b1b6046142cca9e3&"
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/007a5f5248bdd0a52c004533c0368392ba00f46427fb5654d039d84f14a04a2a?apiKey=d7e39ab895184392b1b6046142cca9e3&"
                className="aspect-[0.82] object-contain object-center w-8 overflow-hidden max-w-full"
              />
              <div className="relative fill-[linear-gradient(0deg,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0.00)_100%)] self-stretch flex shrink-0 h-5 flex-col mt-56 max-md:mt-10" />
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex-col overflow-hidden relative flex aspect-[0.7464788732394366] w-[212px] grow py-1 items-end max-md:mt-3">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8839ce0b4aaabd2ae1844b3164c3cda23cfbf55a23dc66899bac5d7af95e8c07?apiKey=d7e39ab895184392b1b6046142cca9e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8839ce0b4aaabd2ae1844b3164c3cda23cfbf55a23dc66899bac5d7af95e8c07?apiKey=d7e39ab895184392b1b6046142cca9e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8839ce0b4aaabd2ae1844b3164c3cda23cfbf55a23dc66899bac5d7af95e8c07?apiKey=d7e39ab895184392b1b6046142cca9e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8839ce0b4aaabd2ae1844b3164c3cda23cfbf55a23dc66899bac5d7af95e8c07?apiKey=d7e39ab895184392b1b6046142cca9e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8839ce0b4aaabd2ae1844b3164c3cda23cfbf55a23dc66899bac5d7af95e8c07?apiKey=d7e39ab895184392b1b6046142cca9e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8839ce0b4aaabd2ae1844b3164c3cda23cfbf55a23dc66899bac5d7af95e8c07?apiKey=d7e39ab895184392b1b6046142cca9e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8839ce0b4aaabd2ae1844b3164c3cda23cfbf55a23dc66899bac5d7af95e8c07?apiKey=d7e39ab895184392b1b6046142cca9e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8839ce0b4aaabd2ae1844b3164c3cda23cfbf55a23dc66899bac5d7af95e8c07?apiKey=d7e39ab895184392b1b6046142cca9e3&"
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac50e1bf9b3cd6b080f82d598cd3abb927a028587f70ecbb49b350ebe9b4ace1?apiKey=d7e39ab895184392b1b6046142cca9e3&"
                className="aspect-[0.82] object-contain object-center w-8 overflow-hidden max-w-full"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5353db24f551c8d574ba2f53e99257d07c793ce8ff82eedbf209d4e1db14caa6?apiKey=d7e39ab895184392b1b6046142cca9e3&"
                className="aspect-[10.6] object-contain object-center w-full fill-[linear-gradient(0deg,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0.00)_100%)] overflow-hidden self-center mt-56 max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full items-start justify-between gap-5 mt-2 px-5 max-md:max-w-full max-md:flex-wrap">
        <span className="flex basis-[0%] flex-col items-stretch mt-1 self-start">
          <div className="justify-center text-gray-800 text-base font-bold leading-5 whitespace-nowrap">
            10€/Dia
          </div>
          <div className="justify-center text-gray-800 text-sm leading-5 whitespace-nowrap mt-4">
            Herramientas
          </div>
        </span>
        <div className="self-stretch flex justify-between gap-4 items-start">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5edfabf67897c7179f94a9144c3984de72a4ce9b894464ddb1561686aa0bcf6?apiKey=d7e39ab895184392b1b6046142cca9e3&"
            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
          />
          <span className="flex grow basis-[0%] flex-col items-stretch mt-1">
            <div className="justify-center text-gray-800 text-base font-bold leading-5">
              10€/Dia
            </div>
            <div className="justify-center text-gray-800 text-sm leading-5 whitespace-nowrap mt-4">
              maletin herramientas
            </div>
          </span>
        </div>
        <div className="self-stretch flex justify-between gap-2.5 items-start">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5edfabf67897c7179f94a9144c3984de72a4ce9b894464ddb1561686aa0bcf6?apiKey=d7e39ab895184392b1b6046142cca9e3&"
            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
          />
          <span className="flex grow basis-[0%] flex-col items-stretch mt-1">
            <div className="justify-center text-gray-800 text-base font-bold leading-5 whitespace-nowrap">
              10€/Dia
            </div>
            <div className="justify-center text-gray-800 text-sm leading-5 whitespace-nowrap mt-4">
              Herramientas
            </div>
          </span>
        </div>
        <div className="self-stretch flex items-stretch justify-between gap-4">
          <span className="flex grow basis-[0%] flex-col items-stretch">
            <span className="flex items-stretch justify-between gap-3">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/24319e003d5315553818cce999bc70aa2466527465d59e7bf0c773befc750e02?apiKey=d7e39ab895184392b1b6046142cca9e3&"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className="justify-center text-gray-800 text-base font-bold leading-5 my-auto">
                10€/Dia
              </div>
            </span>
            <div className="justify-center text-gray-800 text-sm leading-5 whitespace-nowrap mt-2.5 self-end">
              Herramientas electricidad.
            </div>
          </span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0599b7f8a19095b59702478d36704736f2e0c7a5e7884cbbbdef2d6882cd0cb?apiKey=d7e39ab895184392b1b6046142cca9e3&"
            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full self-start"
          />
        </div>
      </div>
      <div className="w-full mt-24 px-5 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
            <div className="flex-col overflow-hidden relative flex aspect-[1.4228187919463087] w-[212px] grow pl-16 pt-1.5 pb-12 items-end max-md:mt-3 max-md:pl-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/be558df203ad8846ce22d1bf5f949ba56b2d43b6a132e8457090385aa6180c4e?apiKey=d7e39ab895184392b1b6046142cca9e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/be558df203ad8846ce22d1bf5f949ba56b2d43b6a132e8457090385aa6180c4e?apiKey=d7e39ab895184392b1b6046142cca9e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/be558df203ad8846ce22d1bf5f949ba56b2d43b6a132e8457090385aa6180c4e?apiKey=d7e39ab895184392b1b6046142cca9e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/be558df203ad8846ce22d1bf5f949ba56b2d43b6a132e8457090385aa6180c4e?apiKey=d7e39ab895184392b1b6046142cca9e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/be558df203ad8846ce22d1bf5f949ba56b2d43b6a132e8457090385aa6180c4e?apiKey=d7e39ab895184392b1b6046142cca9e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/be558df203ad8846ce22d1bf5f949ba56b2d43b6a132e8457090385aa6180c4e?apiKey=d7e39ab895184392b1b6046142cca9e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/be558df203ad8846ce22d1bf5f949ba56b2d43b6a132e8457090385aa6180c4e?apiKey=d7e39ab895184392b1b6046142cca9e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/be558df203ad8846ce22d1bf5f949ba56b2d43b6a132e8457090385aa6180c4e?apiKey=d7e39ab895184392b1b6046142cca9e3&"
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ad29c1a3e456b4e973f9b193d06c375ff8380403013baa2b73f5a82b98642b3?apiKey=d7e39ab895184392b1b6046142cca9e3&"
                className="aspect-[0.82] object-contain object-center w-8 overflow-hidden max-w-full mb-9"
              />
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex-col overflow-hidden relative flex aspect-[1.429530201342282] w-[213px] grow pl-16 pt-1.5 pb-12 items-end max-md:mt-3 max-md:pl-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bd7b6fc3a6efd41fe3e505360928cd7f4681e94f59c38b7a26e533b785e7d18f?apiKey=d7e39ab895184392b1b6046142cca9e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd7b6fc3a6efd41fe3e505360928cd7f4681e94f59c38b7a26e533b785e7d18f?apiKey=d7e39ab895184392b1b6046142cca9e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd7b6fc3a6efd41fe3e505360928cd7f4681e94f59c38b7a26e533b785e7d18f?apiKey=d7e39ab895184392b1b6046142cca9e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd7b6fc3a6efd41fe3e505360928cd7f4681e94f59c38b7a26e533b785e7d18f?apiKey=d7e39ab895184392b1b6046142cca9e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd7b6fc3a6efd41fe3e505360928cd7f4681e94f59c38b7a26e533b785e7d18f?apiKey=d7e39ab895184392b1b6046142cca9e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd7b6fc3a6efd41fe3e505360928cd7f4681e94f59c38b7a26e533b785e7d18f?apiKey=d7e39ab895184392b1b6046142cca9e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd7b6fc3a6efd41fe3e505360928cd7f4681e94f59c38b7a26e533b785e7d18f?apiKey=d7e39ab895184392b1b6046142cca9e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd7b6fc3a6efd41fe3e505360928cd7f4681e94f59c38b7a26e533b785e7d18f?apiKey=d7e39ab895184392b1b6046142cca9e3&"
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/effbdadcbd2a3f2e3853a784a9886d706ae21cd23b6cad67beef5f613a45a968?apiKey=d7e39ab895184392b1b6046142cca9e3&"
                className="aspect-[0.82] object-contain object-center w-8 overflow-hidden max-w-full mb-9"
              />
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex-col overflow-hidden relative flex aspect-[1.4228187919463087] w-[212px] grow pl-16 pt-1.5 pb-12 items-end max-md:mt-3 max-md:pl-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3e15d5b6b52bd0e9c52e08e903966bc44df54e713dad2d8cd7a326d5ce38f4ab?apiKey=d7e39ab895184392b1b6046142cca9e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e15d5b6b52bd0e9c52e08e903966bc44df54e713dad2d8cd7a326d5ce38f4ab?apiKey=d7e39ab895184392b1b6046142cca9e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e15d5b6b52bd0e9c52e08e903966bc44df54e713dad2d8cd7a326d5ce38f4ab?apiKey=d7e39ab895184392b1b6046142cca9e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e15d5b6b52bd0e9c52e08e903966bc44df54e713dad2d8cd7a326d5ce38f4ab?apiKey=d7e39ab895184392b1b6046142cca9e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e15d5b6b52bd0e9c52e08e903966bc44df54e713dad2d8cd7a326d5ce38f4ab?apiKey=d7e39ab895184392b1b6046142cca9e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e15d5b6b52bd0e9c52e08e903966bc44df54e713dad2d8cd7a326d5ce38f4ab?apiKey=d7e39ab895184392b1b6046142cca9e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e15d5b6b52bd0e9c52e08e903966bc44df54e713dad2d8cd7a326d5ce38f4ab?apiKey=d7e39ab895184392b1b6046142cca9e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e15d5b6b52bd0e9c52e08e903966bc44df54e713dad2d8cd7a326d5ce38f4ab?apiKey=d7e39ab895184392b1b6046142cca9e3&"
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/abcbd76e1bdf1b12246745eb587de1dd909bcd87caf109a60f7148b21fec6e54?apiKey=d7e39ab895184392b1b6046142cca9e3&"
                className="aspect-[0.82] object-contain object-center w-8 overflow-hidden max-w-full mb-9"
              />
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex-col overflow-hidden relative flex aspect-[1.4228187919463087] w-[212px] grow pl-16 pt-1.5 pb-12 items-end max-md:mt-3 max-md:pl-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/500e3c29dcef17a6d0dee28b972416aa758778ac1e24c4d7b151aa5e4577f010?apiKey=d7e39ab895184392b1b6046142cca9e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/500e3c29dcef17a6d0dee28b972416aa758778ac1e24c4d7b151aa5e4577f010?apiKey=d7e39ab895184392b1b6046142cca9e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/500e3c29dcef17a6d0dee28b972416aa758778ac1e24c4d7b151aa5e4577f010?apiKey=d7e39ab895184392b1b6046142cca9e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/500e3c29dcef17a6d0dee28b972416aa758778ac1e24c4d7b151aa5e4577f010?apiKey=d7e39ab895184392b1b6046142cca9e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/500e3c29dcef17a6d0dee28b972416aa758778ac1e24c4d7b151aa5e4577f010?apiKey=d7e39ab895184392b1b6046142cca9e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/500e3c29dcef17a6d0dee28b972416aa758778ac1e24c4d7b151aa5e4577f010?apiKey=d7e39ab895184392b1b6046142cca9e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/500e3c29dcef17a6d0dee28b972416aa758778ac1e24c4d7b151aa5e4577f010?apiKey=d7e39ab895184392b1b6046142cca9e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/500e3c29dcef17a6d0dee28b972416aa758778ac1e24c4d7b151aa5e4577f010?apiKey=d7e39ab895184392b1b6046142cca9e3&"
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0dbb55aa3d8c33534635efa3b63b4a38fb432369825668987f5e1965986ba02?apiKey=d7e39ab895184392b1b6046142cca9e3&"
                className="aspect-[0.82] object-contain object-center w-8 overflow-hidden max-w-full mb-9"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCards