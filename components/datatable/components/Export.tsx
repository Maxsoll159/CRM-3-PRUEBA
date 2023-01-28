interface PropExport {
    onExport: any
}
export const Export: React.FC<PropExport> = ({ onExport }) => {
    return (
        <div className="flex gap-3">
            <button className="rounded-lg bg-red-400 py-2 px-5 text-white font-medium flex items-center gap-3 text-base"><i className="fa-solid fa-circle-plus text-white "></i>Nuevo Ceriticado</button>
            <button onClick={e => onExport(e.target.value)}
                className="rounded-lg bg-green-600 py-2 px-5 text-white font-medium flex items-center gap-3 text-base"
            ><i className="fa-solid fa-file-excel text-white"></i>Excel</button>
        </div>
    )
};