export function Checkbox(props) {
    return (
        <div className="checkbox">
            <input type="checkbox" name="isRead" id={props.id} />
            <label forhtml="isRead">I have read this book</label><br />
        </div>
    )

}