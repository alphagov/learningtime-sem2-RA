interface MonthSelectorProps {
    setMonth: (value: string) => void
}

export const MonthSelector = ({ setMonth }: MonthSelectorProps) => {
    return (
        <>
            <div className="monthSelector">
                <label>Month:</label>
                <select
                    name="month"
                    onChange={(month) => setMonth(month.target.value)}
                >
                    <option value="2020-06">June 2020</option>
                    <option value="2020-07">Jul 2020</option>
                    <option value="2020-08">Aug 2020</option>
                    <option value="2020-09">Sep 2020</option>
                    <option value="2020-10">Oct 2020</option>
                    <option value="2020-11">Nov 2020</option>
                    <option value="2020-12">Dec 2020</option>
                    <option value="2021-01">Jan 2021</option>
                    <option value="2021-02">Feb 2021</option>
                    <option value="2021-03">Mar 2021</option>
                    <option value="2021-04">Apr 2021</option>
                    <option value="2021-05">May 2021</option>
                    <option value="2021-06">Jun 2021</option>
                    <option value="2021-07">Jul 2021</option>
                    <option value="2021-08">Aug 2021</option>
                    <option value="2021-09">Sep 2021</option>
                    <option value="2021-10">Oct 2021</option>
                    <option value="2021-11">Nov 2021</option>
                    <option value="2021-12">Dec 2021</option>
                    <option value="2022-01">Jan 2022</option>
                    <option value="2022-02">Feb 2022</option>
                    <option value="2022-03">Mar 2022</option>
                    <option value="2022-04">Apr 2022</option>
                    <option value="2022-05">May 2022</option>
                    <option value="2022-06">Jun 2022</option>
                    <option value="2022-07">Jul 2022</option>
                    <option value="2022-08">Aug 2022</option>
                    <option value="2022-09">Sep 2022</option>
                    <option value="2022-10">Oct 2022</option>
                    <option value="2022-11">Nov 2022</option>
                    <option value="2022-12">Dec 2022</option>
                    <option value="2023-01">Jan 2023</option>
                    <option value="2023-02">Feb 2023</option>
                    <option value="2023-03">Mar 2023</option>
                    <option value="2023-04">Apr 2023</option>
                    <option value="2023-05">May 2023</option>
                </select>
            </div>
        </>
    )
}
