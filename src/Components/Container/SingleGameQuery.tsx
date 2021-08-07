import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import ErrorMessage from '../Presentational/ErrorMessage';
import LoadingAnimation from '../Presentational/LoadingAnimation';
import SingleGame from './../Presentational/SingleGame';

import { iSingleGameSteam } from './../../Interfaces/iSingleGameSteam';
import { Endpoint } from './../../Config/ApiConfig';

export interface iSingleGameQuery {
  steamID: string;
}

const SingleGameQuery: React.FC<iSingleGameQuery> = (props) => {
  const { steamID } = props;

  const [singleGameSteam, setSingleGameSteam] = useState<iSingleGameSteam | null>(null);

  const { isLoading, error, data, status } = useQuery('SingleGameSteam', () =>
    fetch(Endpoint.url + steamID, { mode: 'no-cors' }).then((res) => res.json())
  );

  useEffect(() => {
    if (status === 'success') {
      setSingleGameSteam(data[steamID]?.data);
    }
  }, [status, data, steamID]);

  if (isLoading) return <LoadingAnimation />;
  if (error) return <ErrorMessage />;

  return (
    <div>
      <SingleGame {...singleGameSteam!} />
    </div>
  );
};

export default SingleGameQuery;
