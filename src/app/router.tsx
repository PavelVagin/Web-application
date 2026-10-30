import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { GamePage } from "../pages/GamePage";
import { SharePage } from "../pages/SharePage";
import { JoinPage } from "../pages/JoinPage";
import { ResultPage } from "../pages/ResultPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/share",
        element: <SharePage />,
    },
    {
        path: "/game",
        element: <GamePage />,
    },
    {
        path: "/join",
        element: <JoinPage />,
    },
    {
        path: "/result",
        element: <ResultPage />
    },
]);

function AppRouter() {
    return <RouterProvider router={router} />;
}

export { AppRouter };

