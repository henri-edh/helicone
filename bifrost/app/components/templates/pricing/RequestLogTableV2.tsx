interface RequestLogTableProps {}

const BASE_LOG_PRICING: {
  lower: number;
  upper: number;
  rate: number;
}[] = [
  {
    lower: 0,
    upper: 10_000,
    rate: 0,
  },
  {
    lower: 10_000,
    upper: 25_000,
    rate: 0.0016,
  },
  {
    lower: 25_000,
    upper: 50_000,
    rate: 0.0008,
  },
  {
    lower: 50_000,
    upper: 100_000,
    rate: 0.00035,
  },
  {
    lower: 100_000,
    upper: 2_000_000,
    rate: 0.0003,
  },
  {
    lower: 2_000_000,
    upper: 15_000_000,
    rate: 0.000128,
  },
  {
    lower: 15_000_000,
    upper: Number.MAX_SAFE_INTEGER,
    rate: 0.000083,
  },
];

export const HELICONE_LOG_PRICING = BASE_LOG_PRICING.map((pricing) => ({
  ...pricing,
  rate: pricing.rate,
}));

const RequestLogTableV2 = (props: RequestLogTableProps) => {
  const {} = props;

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b border-gray-300">
          <th className="text-left text-slate-500 p-2">Lower Band</th>
          <th className="text-left text-slate-500 p-2">Upper Band</th>
          <th className="text-left text-slate-500 p-2">Rate per log</th>
        </tr>
      </thead>
      <tbody>
        {HELICONE_LOG_PRICING.map((pricing, index) => (
          <tr key={index}>
            <td className="text-left text-slate-500 p-2">
              {new Intl.NumberFormat("us").format(pricing.lower).toString()}
            </td>
            <td className="text-left text-slate-500 p-2">
              {pricing.upper === Number.MAX_SAFE_INTEGER
                ? "∞"
                : new Intl.NumberFormat("us").format(pricing.upper).toString()}
            </td>
            <td className="text-left text-slate-500">
              {pricing.lower === 0 ? "Free" : `$${pricing.rate.toFixed(7)}`}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RequestLogTableV2;
