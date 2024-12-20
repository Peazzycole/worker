import clsx from "clsx";
import Image from "next/image";

type Props = {
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchInput = ({ value, onChange }: Props) => {
    return (
        <div className="relative">
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder="Sort, filter and search with Copilot"
                className={clsx("px-3 py-1 border border-primary-200 rounded focus:outline-none placeholder:text-saleSpotGrey-400 placeholder:text-sm w-full md:w-[355px] dashboard-container")}
            />
            <div
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
            >
                <Image src="/copilot.svg" alt="copilot image" width={24} height={24} />
            </div>
        </div>
    );
};
