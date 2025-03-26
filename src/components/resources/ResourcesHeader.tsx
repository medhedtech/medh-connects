
interface ResourcesHeaderProps {
  title: string;
  description: string;
}

const ResourcesHeader = ({ title, description }: ResourcesHeaderProps) => {
  return (
    <div className="bg-accent-green/10 py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ResourcesHeader;
