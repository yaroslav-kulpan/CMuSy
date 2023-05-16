interface ITextAreaProps {
  label?: string;
  className?:string;
  placeholder?:string;
  value?:string;
}

export function TextArea(props: ITextAreaProps) {
  return (
    <div className="w-full">
      <label htmlFor="">{props?.label}</label>
      <textarea
        className={props?.className}
        placeholder={props?.placeholder}
        value={props.value}
      />
    </div>
  );
}
