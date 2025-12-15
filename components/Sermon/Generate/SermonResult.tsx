interface SectionProps {
  title: string;
  content: string;
  isItalic?: boolean;
}

interface SermonPointProps {
  point: string;
  verse: string;
  development: string;
}

export interface SermonResultData {
  title: string;
  introduction: string;
  points: SermonPointProps[];
  application: string;
  prayer: string;
}

const SermonResult = ({
  title,
  introduction,
  points,
  application,
  prayer,
}: SermonResultData) => {
  return (
    <div className="mt-8 p-6 bg-gray-100 rounded-lg animate-fade-in hover:shadow-lg transition-shadow duration-500 hover:bg-gray-200">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>

      <div className="space-y-4">
        <Section title="Introdução" content={introduction} />

        <div>
          <h4 className="font-semibold text-gray-800 mb-2">
            Pontos Principais:
          </h4>
          {points.map((ponto, index) => (
            <SermonPoint
              key={index}
              point={ponto.point}
              verse={ponto.verse}
              development={ponto.development}
            />
          ))}
        </div>

        <Section title="Aplicação" content={application} />
        <Section title="Oração Final" content={prayer} isItalic />
      </div>
    </div>
  );
};

const Section = ({ title, content, isItalic }: SectionProps) => (
  <div>
    <h4 className="font-semibold text-gray-800 mb-2">{title}:</h4>
    <p className={`text-gray-700 ${isItalic ? "italic" : ""}`}>{content}</p>
  </div>
);

const SermonPoint = ({ point, verse, development }: SermonPointProps) => (
  <div className="mb-4 pl-4 border-l-4 border-blue-200">
    <h5 className="font-medium text-gray-800">{point}</h5>
    <p className="text-sm text-blue-600 mb-1">Versículo: {verse}</p>
    <p className="text-gray-700 text-sm">{development}</p>
  </div>
);

export default SermonResult;
