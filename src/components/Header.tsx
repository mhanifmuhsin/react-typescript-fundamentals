interface HeaderProps {
    title: string;
    optionalText?: string
}
export default function Header({ title, optionalText }: HeaderProps) {
    return <>
        <div>{title}</div>
        {optionalText && <div>{optionalText}</div>}
    </>
}