import { Button, Flex } from 'antd';
import Link from 'next/link';

function NotFound() {
  return (
    <Flex
      style={{
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>Page Not Found.</h1>
      <Link href="/">
        <Button type="primary">Back to home</Button>
      </Link>
    </Flex>
  );
}

export default NotFound;
