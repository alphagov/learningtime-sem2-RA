import { cleanName } from '../../../server/utils/cleanNames'
import { PoliceAPIResponse } from '../../../server/utils/types/policeAPI'

interface DataTableProps {
    data: Record<string, PoliceAPIResponse[]>
}

export const DataTable = ({ data }: DataTableProps) => {
    return (
        <>
            {Object.keys(data).length > 0 ? (
                <div className="dataTable">
                    <table>
                        <thead>
                            <tr>
                                <th>Crime Category</th>
                                <th>Occurance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(data).map((key) => (
                                <tr key={key}>
                                    <td className="crimeName">
                                        {cleanName(key)}
                                    </td>
                                    <td>{data[key].length}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="dataText">
                        <p>
                            The most common crime in the postcode is{' '}
                            <strong>{cleanName(Object.keys(data)[0])}</strong>.
                            The total number of crimes for the month is{' '}
                            <strong>
                                {Object.keys(data).reduce(
                                    (sum: number, key) => {
                                        sum += data[key].length
                                        return sum
                                    },
                                    0
                                )}
                                .
                            </strong>
                        </p>
                    </div>
                </div>
            ) : undefined}
        </>
    )
}
