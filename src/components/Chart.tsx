const dummyData = [
  { month: 'Jan', value: 65 },
  { month: 'Feb', value: 75 },
  { month: 'Mar', value: 55 },
  { month: 'Apr', value: 85 },
  { month: 'May', value: 70 },
  { month: 'Jun', value: 90 },
];

export default function Chart() {
  const maxValue = Math.max(...dummyData.map(d => d.value));

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-6">Monthly Overview</h3>

      <div className="flex items-end justify-between h-64 gap-4">
        {dummyData.map((item, index) => {
          const height = (item.value / maxValue) * 100;
          return (
            <div key={index} className="flex-1 flex flex-col items-center gap-3">
              <div className="w-full flex items-end justify-center" style={{ height: '240px' }}>
                <div
                  className="w-full bg-blue-500 rounded-t-lg transition-all hover:bg-blue-600 relative group"
                  style={{ height: `${height}%` }}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-xs py-1 px-2 rounded">
                    {item.value}
                  </div>
                </div>
              </div>
              <span className="text-sm font-medium text-gray-600">{item.month}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
