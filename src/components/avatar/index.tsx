import Image from 'next/image';

function Avatar() {
  return (
    <Image
      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      className="rounded-full h-10
        transition duration-150"
      width="40px"
      height="40px"
    />
  );
}

export default Avatar;
