export const OrangeBadge = ({title, description}) => {
    return(
        <div className="bg-secondary rounded-br-3xl rounded-tr-3xl mb-3 w-max p-2 text-black px-4">
            <b>{title}</b> {description}
        </div>
    )
}