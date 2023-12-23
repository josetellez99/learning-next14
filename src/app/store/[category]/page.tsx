interface CategoryProps {
    params : {
        category: string
    }
}

export default function Category (props: CategoryProps) {

    const {category} = props.params

    return (
        <>
            <h1>Category</h1>
            <h2>{category}</h2>
        </>
    )
}