import InputForm from "../InputForm";

export default function TableFiltersModal(){
    const handleFilterFormChange = () => {
        console.log("Working")
    }
    const applyTableFilter = () => {
        alert('Apply Table Filters functionalities coming soon!')
    }
    const resetTableFilterHandle = () => {
        alert('Reset Table Filters functionalities coming soon!')
    }
    return(
        <div className="table-filter-modal">
                <div className="filter-button">
                    <label>Organization</label>
                    <select title="select organization" className="input-filter">
                        <option>select</option>
                    </select>
                </div>
                <div className="filter-button">
                    <label>Username</label>
                    <InputForm inputType="text" inputName="name" placeholder="User" handleChange={handleFilterFormChange} className="input-filter" />
                </div>
                <div className="filter-button">
                    <label>Email</label>
                    <InputForm inputType="email" inputName="email" placeholder="Email" handleChange={handleFilterFormChange} className="input-filter" />
                </div>
                <div className="filter-button">
                    <label>Date</label>
                    <InputForm inputType="date" inputName="date" placeholder="Date" handleChange={handleFilterFormChange} className="input-filter" />
                </div>
                <div className="filter-button">
                    <label>Phone Number</label>
                    <InputForm inputType="number" inputName="number" placeholder="Phone Number" handleChange={handleFilterFormChange} className="input-filter" />
                </div>
                <div className="filter-button">
                    <label>Status</label>
                    <select title="select organization" className="input-filter">
                        <option>select</option>
                    </select>
                </div>
                <div className="filter-footer">
                    <button onClick={resetTableFilterHandle} className="reset-button" title="Reset filter" type="button">Reset</button>
                    <button onClick={applyTableFilter} className="apply-button" title="Apply filter" type="button">Filter</button>
                </div>
            </div>
    )
}