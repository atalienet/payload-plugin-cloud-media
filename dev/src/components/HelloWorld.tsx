import React from 'react';
import { Box, Text } from '@payloadcms/ui';

const HelloWorld: React.FC = () => {
  return (
    <Box padding="20px" backgroundColor="#fff">
      <Text color="red" fontSize="24px" fontWeight="bold">
        Hello World
      </Text>
    </Box>
  );
};

export default HelloWorld;