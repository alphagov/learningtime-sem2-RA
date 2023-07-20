import { PoliceAPIResponse } from '../../../server/utils/types/policeAPI'

interface DataTableProps {
    data: Record<string, PoliceAPIResponse[]>
}

export const DataTable = ({ data }: DataTableProps) => {
    return (
        <>
            {Object.keys(data).length > 0 ? (
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
                                <td>{key}</td>
                                <td>{data[key].length}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : undefined}
        </>
    )
}
