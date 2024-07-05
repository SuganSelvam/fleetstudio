/* eslint-disable no-useless-escape */
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RouterError() {

const navigate = useNavigate();
const [url, setUrl] = React.useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    const regex = /https:\/\/github\.com\/([^\/]+)\/([^\/]+)\/commit\/([a-f0-9]{40})/;
    const match = url.match(regex);

    if (match) {
        const [, owner, repo, commitId] = match;
        setUrl('');
        navigate(`/repositories/${owner}/${repo}/commit/${commitId}`);
    } else {
        throw new Error("Invalid GitHub URL format");
    }
}

    return (
        <div className="flex flex-col h-full">
            <div className="flex flex-col items-center justify-center min-h-[50vh] bg-background px-4 py-12 sm:px-6 lg:px-8">
                <div className="text-center space-y-5">
                    <div className="mx-auto h-12 w-12 text-primary" />
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Oops, Page Not Found!
                    </h1>
                    <p className="mt-4 text-muted-foreground max-w-md mx-auto">
                        The page you&apos;re looking for doesn&apos;t exist.<br/>
                        If you facing issues, Please enter
                        github commit URL and we will route you automatically.
                    </p>
                    <div className="mt-6 flex gap-2 w-[500px] mx-auto">
                        <input
                            type="text"
                            placeholder="Enter a Github Commit URL"
                            className="flex-1 text-md border p-3 rounded-md"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                        <button 
                        className="w-32 bg-blue-100 text-blue-500 rounded-md hover:bg-blue-200 transition-all hover:shadow-sm font-semibold"
                            onClick={handleSubmit}
                        >
                            Go
                        </button>
                    </div>

                    <div className="mt-6 text-color-muted">
                        <div></div> Here is the sample url for help:
                        <div>
                            https://github.com/golemfactory/clay/commit/e10456787f2ec6b430181d6f5e770f4df36b8ff8
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
