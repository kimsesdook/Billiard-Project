import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";

import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import MyPage from "../pages/MyPage";

import MatchListPage from "../pages/MatchListPage";
import MatchPage from "../pages/MatchPage";
import MatchDetailPage from "../pages/MatchDetailPage";
import MatchEditPage from "../pages/MatchEditPage";

import PlayerPage from "../pages/PlayerPage";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="matches">
          <Route index element={<MatchListPage />} />
          <Route path="new" element={<MatchPage />} />
          <Route path=":id" element={<MatchDetailPage />} />
          <Route path=":id/edit" element={<MatchEditPage />} />
        </Route>

        <Route path="players" element={<PlayerPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="mypage" element={<MyPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
