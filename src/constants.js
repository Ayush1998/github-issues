export const WEB_URL = 'https://github.com';

export const BASE_URL = 'https://api.github.com';

export const OWNER = 'facebook';

export const REPO = 'react';

export const GIT_REPO_INFO = `${BASE_URL}/repos/${OWNER}/${REPO}`;

export const GIT_EXTERNAL_LINK = `${WEB_URL}/${OWNER}/${REPO}`;

export const GIT_ISSUE_ENDPOINT = `${GIT_REPO_INFO}/issues`;

export const navLinks = [
    { title: "Code", url: GIT_EXTERNAL_LINK, icon: '/images/code.svg' },
    { title: "Issues", url: `${window.location.origin}`, value: 253, },
    { title: "Pull Requests", url: `${GIT_EXTERNAL_LINK}/pulls`, value: 7, icon: '/images/gitPull.svg' },
    { title: "Projects", url: `${GIT_EXTERNAL_LINK}/projects`, value: 2, icon: '/images/project.svg' },
    { title: "Insights", url: `${GIT_EXTERNAL_LINK}/insights`, },
]

const getMsDifference = date => new Date() - new Date(date);
const getHrDiff = date => Math.floor(getMsDifference(date) / 1000 / 60 / 60);
const getHoursDifference = date => (Math.floor(getMsDifference(date) / 1000 / 60 / 60) >= 2 ? `${Math.floor(getMsDifference(date) / 1000 / 60 / 60)} hours` : 'an hour');
const getDaysDifference = date => (Math.floor(getHrDiff(date) / 24) >= 2 ? `${Math.floor(getHrDiff(date) / 24)} days` : 'a day');
export const getCurrentDateDifference = (date) => (
    getHrDiff(date) >= 24 ? getDaysDifference(date) : getHoursDifference(date)
)
