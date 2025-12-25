const tools = [
  { letter: 'L', name: 'Linear' },
  { letter: 'J', name: 'Jira' },
  { letter: 'F', name: 'Figma' },
  { letter: 'M', name: 'Mixpanel' },
  { letter: 'N', name: 'Notion' },
  { letter: 'A', name: 'Amplitude' },
]

const Tools = () => {
  return (
    <section className="py-12 bg-page border-y border-line">
      <div className="container max-w-4xl">
        <p className="text-xs font-semibold text-slate uppercase tracking-widest text-center mb-6">
          Expert in the tools that ship products
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {tools.map((tool) => (
            <div key={tool.letter} className="flex items-center gap-2 text-slate/70">
              <div className="w-6 h-6 rounded flex items-center justify-center bg-slate/5 border border-slate/10">
                <span className="text-sm font-semibold">{tool.letter}</span>
              </div>
              <span className="text-sm font-medium">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tools
