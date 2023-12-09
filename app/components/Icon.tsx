import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import dynamic from 'next/dynamic';

export type IconName = keyof typeof dynamicIconImports;

interface IconProperties extends LucideProps {
    name: IconName;
}

const Icon = ({ name, ...props }: IconProperties) => {
    const DynamicIcon = dynamic(dynamicIconImports[name])

    return (
        <DynamicIcon {...props} />
    );
}

export default Icon