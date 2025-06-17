
import servicesData from "../../../constants/frontend_serverdata"
import heroData from "../../../constants/frontend_card"


export default function WebServicesSection() {
  const renderDescription = (description, highlightedText) => {
    if (highlightedText) {
      const parts = description.split(highlightedText)
      return (
        <>
          {parts[0]}
          <span className="font-medium text-secondary">
            {highlightedText}
          </span>
          {parts[1]}
        </>
      )
    }
    return description
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Content - Hero Section */}
          <div className="bg-slate-900 rounded-2xl p-8 lg:p-12 text-white">
            <div className="mb-6">
              <p className="text-lg mb-4 font-medium text-secondary">
                "{heroData.quote}"
              </p>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight text-white">{heroData.title}</h2>

            <p className="text-gray-300 leading-relaxed">{heroData.description}</p>
          </div>

          {/* Right Content - Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicesData.map((service) => {
              const Icon = service.icon; // ✅ grab the component reference
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 bg-secondary/10"

                    >
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {renderDescription(service.description, service.highlightedText)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
