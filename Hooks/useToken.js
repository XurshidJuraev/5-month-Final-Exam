import React from 'react';
import { Context } from '../Context/Authentication';

const useToken = (setterOnly) => {
	const { Token, setToken } = React.useContext(Context);

	return setterOnly ? [setToken] : [Token, setToken];
};

export default useToken;

// Usage
// const [token, setToken ] = useToken();
