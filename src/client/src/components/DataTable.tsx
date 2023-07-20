import { PoliceAPIResponse } from '../../../server/utils/types/policeAPI'

interface DataTableProps {
    data: Record<string, PoliceAPIResponse[]>
}

export const DataTable = ({ data }: DataTableProps) => {
    return (
        <>
            <th>Crime Category</th>
            <th>Occurance</th>
            {Object.keys(data).map((key) => (
                <tr key={key}>
                    <td>{key}</td>
                    <td>{data[key].length}</td>
                </tr>
            ))}
        </>
    )
}
