import { Counter } from "./components/Counter";
import { DawgDays } from "./components/DawgDays";
import { Mho } from "./components/Mho";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
    },
    {
        path: '/dawg-days',
        element: <DawgDays />
    },
    {
        path: '/mho',
        element: <Mho />
    }
];

export default AppRoutes;
