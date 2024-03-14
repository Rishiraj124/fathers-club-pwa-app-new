const page = () => {
  return (
    <div>
      <ol className='breadcrumb' aria-label='breadcrumbs'>
        <li className='breadcrumb-item'>
          <a href='#'>Home</a>
        </li>
        <li className='breadcrumb-item'>
          <a href='#'>Library</a>
        </li>
        <li className='breadcrumb-item active' aria-current='page'>
          <a href='#'>Data</a>
        </li>
      </ol>
    </div>
  );
};

export default page;
