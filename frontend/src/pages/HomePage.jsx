import React, { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext"; // Import the context
import { useNavigate } from "react-router-dom"; // Import navigate for redirection

import ProfileInfo from "../components/ProfileInfo";
import Repos from "../components/Repos";
import Search from "../components/Search";
import SortRepos from "../components/SortRepos";
import Spinner from "../components/Spinner";

const HomePage = () => {
  const { authUser } = useAuthContext(); // Use authUser from the context
  const navigate = useNavigate(); // Initialize navigate for redirection
  const [userProfile, setUserProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortType, setSortType] = useState("recent");

  // Redirect to login if not logged in
  useEffect(() => {
    if (!authUser) {
      navigate("/login");
    }
  }, [authUser, navigate]);

  const getUserProfileAndRepos = useCallback(async (username = "chiraaax") => {
    setLoading(true);
    try {
      const res = await fetch(`/api/users/profile/${username}`);
      if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
      }
      const { repos, userProfile } = await res.json();

      const sortedRepos = [...repos].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      setRepos(sortedRepos);
      setUserProfile(userProfile);

      return { userProfile, repos: sortedRepos };
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (authUser) {
      getUserProfileAndRepos();
    }
  }, [authUser, getUserProfileAndRepos]);

  const onSearch = async (e, username) => {
    e.preventDefault();
    setLoading(true);
    setRepos([]);
    setUserProfile(null);

    await getUserProfileAndRepos(username);
    setSortType("recent");
  };

  const sortReposBy = (repos, sortType) => {
    if (sortType === "recent") {
      return [...repos].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    } else if (sortType === "stars") {
      return [...repos].sort((a, b) => b.stargazers_count - a.stargazers_count);
    } else if (sortType === "forks") {
      return [...repos].sort((a, b) => b.forks_count - a.forks_count);
    }
    return repos;
  };

  const onSort = (sortType) => {
    const sortedRepos = sortReposBy(repos, sortType);
    setSortType(sortType);
    setRepos(sortedRepos);
  };

  return (
    <div className="m-4">
      <Search onSearch={onSearch} />
      {repos.length > 0 && <SortRepos onSort={onSort} sortType={sortType} />}
      <div className="flex gap-4 flex-col lg:flex-row justify-center items-start">
        {userProfile && !loading && <ProfileInfo userProfile={userProfile} />}
        {!loading && repos.length > 0 && <Repos repos={repos} />}
        {!loading && repos.length === 0 && (
          <p className="text-center">No repositories found. Try searching for a different username.</p>
        )}
        {loading && <Spinner />}
      </div>
    </div>
  );
};

export default HomePage;
