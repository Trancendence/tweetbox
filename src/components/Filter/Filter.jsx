import { useDispatch, useSelector } from "react-redux/es/exports";
import { selectFilter } from "../../redux/selectors";
import { statusFilters } from "../../redux/constant";
import  { setStatusFilter } from  "../../redux/filterSlice"
import { ContainerButtons, FiltersButton } from "./Filter.styled";

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);
    const handleFilterChange = filter => dispatch(setStatusFilter(filter));

    return (
        <ContainerButtons>
            <FiltersButton  selected={filter === statusFilters.all} onClick={()=> handleFilterChange(statusFilters.all) }>All</FiltersButton>
            <FiltersButton  selected={filter === statusFilters.follow} onClick={()=> handleFilterChange(statusFilters.follow) }>Follow</FiltersButton>
            <FiltersButton  selected={filter === statusFilters.followings} onClick={()=> handleFilterChange(statusFilters.followings) }>Followings</FiltersButton>
        </ContainerButtons>
    )
}
