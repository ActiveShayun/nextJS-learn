import SearchInputParams from "./components/searchInputParams";


const MealsPages = async ({ searchParams }) => {
    const query = await searchParams;
    console.log('searchParams', query);

    const allMeals = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query?.search}`);
            const data = await res.json();
            // setMeals(data?.meals || [])
            console.log('allMeals', data);
            return data?.meals
        }
        catch (err) {
            console.log(err);
        }
    }

    const meals = await allMeals()

    return (
        <div>
            <SearchInputParams />
            <div className='grid grid-cols-4'>
                {
                    meals?.map(singleMeals => {
                        return (
                            <div >
                                <h2 className='text-2xl'>
                                    {singleMeals.strCategory}
                                </h2>
                                <p>{singleMeals.strInstructions}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default MealsPages;