'use client'

import { useResumeStore } from '@/lib/resumeStore'

export default function ResumeForm() {
  const { formData, setField } = useResumeStore()

  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const { name, value } = e.target;
  setField(name as keyof typeof formData, value);
};


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // You can route to another page or store this in global state for resume generation
  }

  return (
    <div className="bg-background min-h-screen">
    <main className="max-w-xl mx-auto px-6 py-12 bg-background">
      <h1 className="text-3xl font-semibold mb-6 text-primary">Resume Info</h1>
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <InputField label="Full Name" name="name" value={formData.name} onChange={handleChange} />
        <InputField label="Email Address" name="email" value={formData.email} onChange={handleChange} />
        <InputField label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} />
        <InputField label="LinkedIn URL" name="linkedin" value={formData.linkedin} onChange={handleChange} />
        <InputField label="GitHub URL" name="github" value={formData.github} onChange={handleChange} />

        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/80 transition"
        >
          Generate Resume
        </button>
      </form>
    </main>
    </div>
  )
}

function InputField({
  label,
  name,
  value,
  onChange,
}: {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm mb-1 font-medium text-foreground">
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-md border border-border bg-background text-foreground px-3 py-2 outline-none focus:ring-2 focus:ring-ring"
        required
      />
    </div>
  )
}
