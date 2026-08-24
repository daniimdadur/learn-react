export default function Todo({text, isCompleted, isDelected = false}: {text?: string, isCompleted?: boolean, isDelected?: boolean}) {
    if (isDelected) {
        return null
    } else if (isCompleted) {
        return (
            <li><del>{text}</del></li>
        )
    } else {
        return (
            <li>{text}</li>
        )
    }
}