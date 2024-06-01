import React from 'react';

export const MessageCountContext = React.createContext({
  userMessageCount: 0,
  incrementCount: () => {},
});