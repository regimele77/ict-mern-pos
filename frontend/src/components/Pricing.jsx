import CustomButton from "./CustomButton"

const plans = [
  {
    name: "Silver", emoji: "🥈", price: 43,
    features: [
      { label: "Unlimited users", active: true },
      { label: "Unlimited customers", active: true },
      { label: "Access from anywhere", active: false },
      { label: "Accept payments 24/7", active: false },
      { label: "Free Support", active: false },
    ]
  },
  {
    name: "Gold", emoji: "🥇", price: 65,
    features: [
      { label: "Unlimited users", active: true },
      { label: "Unlimited customers", active: true },
      { label: "Access from anywhere", active: true },
      { label: "Accept payments 24/7", active: false },
      { label: "Free Support", active: false },
    ]
  },
  {
    name: "Bronze", emoji: "🥉", price: 99,
    features: [
      { label: "Unlimited users", active: true },
      { label: "Unlimited customers", active: true },
      { label: "Access from anywhere", active: true },
      { label: "Accept payments 24/7", active: true },
      { label: "Free Support", active: true },
    ]
  },
]

export default function Pricing() {
  return (
    <section className="py-16 px-6 bg-gray-50 min-h-screen">

      <div className="text-center mb-12">
        <p className="text-green-400 font-medium mb-2">Pricing Plan</p>
        <h1 className="text-3xl font-bold text-gray-900">The best choice for you</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <div key={plan.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4">

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-2xl">
                {plan.emoji}
              </div>
              <span className="text-lg font-bold text-gray-800">{plan.name}</span>
            </div>

            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-blue-500">${plan.price}</span>
                <span className="text-sm text-gray-400">/month</span>
              </div>
              <p className="text-sm text-blue-500 mt-1">Get 7 Days Free Trial</p>
            </div>

            <hr className="border-gray-100" />

            <ul className="flex flex-col gap-3 flex-1">
              {plan.features.map((f) => (
                <li key={f.label} className={`flex items-center gap-3 text-sm ${f.active ? "text-gray-800" : "text-gray-400"}`}>
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${f.active ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-400"}`}>
                    {f.active ? "✓" : "-"}
                  </span>
                  {f.label}
                </li>
              ))}
            </ul>

            <CustomButton title='Buy now'/>
          </div>
        ))}
      </div>

    </section>
  )
}