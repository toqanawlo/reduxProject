import Navbar from '@/components/ui/layout/Navbar';
import React from 'react'
import DataTable from 'react-data-table-component';
import resImg from './../../assets/photo_2025-04-23_23-23-04.jpg';
import { BiPencil , BiTrashAlt } from "react-icons/bi";
import { AiOutlineMenuFold } from "react-icons/ai";
const columns = [
	{
		name: 'اسم المطعم',
		selector: row => row.name,
	},
	{
		name: 'صورة المطعم',
		cell: row => <img src={row.img}  style={{ width: '50px', height: '50px' }} />,
	},
  {
    name:'العنوان',
    selector:row => row.address,
  },{
    name:'اسم صاحب المطعم',
    selector:row => row.admin,
  },{
    name:'عدد الأقسام',
    selector:row => row.secNum,
  },{
    name:'عدد المنتجات الكلي',
    selector:row => row.proNum,
  },{
    name:'تاريخ الإنشاء',
    selector:row => row.date,
  },{
     name:'التفاصيل',
    cell: row => (
<div style={{display:'flex', gap:'10px'}}>
  <BiPencil/>
  <BiTrashAlt className="text-red-500" />
  <AiOutlineMenuFold />
</div>
    ),
  }
];

const data = [
  	{
	id: 1,
	name:"القبطان",
  img:resImg,
  address:"طلعة الخالدية",
  admin:"علاوي العبدو",
  secNum:"5",
  proNum:"25",
  date:"06/01/2024",
 
   
  
   
	 },
	{
		id: 2,
		name:"شتورة",
  img:resImg,
  address:"الفرقان دوار الصخرة ",
  admin:"ناصر الخليفي",
  secNum:"1",
  proNum:"15",
  date:"07/01/2024",
	}
]
function TablePaginationActions({ count, page, rowsPerPage, onChangePage }) {
	const handleFirstPageButtonClick = () => {
		onChangePage(1);
	};

	// RDT uses page index starting at 1, MUI starts at 0
	// i.e. page prop will be off by one here
	const handleBackButtonClick = () => {
		onChangePage(page);
	};

	const handleNextButtonClick = () => {
		onChangePage(page + 2);
	};

	const handleLastPageButtonClick = () => {
		onChangePage(getNumberOfPages(count, rowsPerPage));
	};

	return (
		<>
			<IconButton onClick={handleFirstPageButtonClick} disabled={page === 0} aria-label="first page">
				<FirstPageIcon />
			</IconButton>
			<IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
				<KeyboardArrowLeft />
			</IconButton>
			<IconButton
				onClick={handleNextButtonClick}
				disabled={page >= getNumberOfPages(count, rowsPerPage) - 1}
				aria-label="next page"
			>
				<KeyboardArrowRight />
			</IconButton>
			<IconButton
				onClick={handleLastPageButtonClick}
				disabled={page >= getNumberOfPages(count, rowsPerPage) - 1}
				aria-label="last page"
			>
				<LastPageIcon />
			</IconButton>
		</>
	);
}

export const CustomMaterialPagination = ({ rowsPerPage, rowCount, onChangePage, onChangeRowsPerPage, currentPage }) => (
	<TablePagination
		component="nav"
		count={rowCount}
		rowsPerPage={rowsPerPage}
		page={currentPage - 1}
		onChangePage={onChangePage}
		onChangeRowsPerPage={({ target }) => onChangeRowsPerPage(Number(target.value))}
		ActionsComponent={TablePaginationActions}
	/>
);


function restaurantPage() {
  return (
  <div>
    <Navbar></Navbar>

  <div className='flex justify-center items-center  mt-6 border-1   '>
  <DataTable
			columns={columns}
			data={data}
		/>
  </div>
    </div>
  )
}

export default restaurantPage;
