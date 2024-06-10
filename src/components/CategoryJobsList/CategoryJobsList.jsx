

const CategoryJobsList = ({ list }) => {
     const { logo, category_name, availability } = list

     return (
          <div className="mb-20 ">
               <img src={logo} alt="" className="rounded-xl my-4 " />
               <h2 className="text-xl font-medium my-3">{category_name}</h2>
               <p className="text-base font-normal">{availability}</p>
          </div>
     );
};

export default CategoryJobsList;