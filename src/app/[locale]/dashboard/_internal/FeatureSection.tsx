import React from "react";

function FeatureSection() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black text-foreground">
          This website is built with Next.js and React.js
        </h2>
        <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
          Featuring powerful tools that make React the leading choice for modern
          web development, including Tailwind CSS, i18n for multilingual
          support, Redux Toolkit, responsive design, email feedback integration,
          and a robust backend powered by Node.js, Express, PostgreSQL, OAuth,
          and JWT authentication.
        </p>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> */}
      {/* Component-Based */}
      {/* <Card className="border-border">
          <CardHeader>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
              <Cpu className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Component-Based</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Build encapsulated components that manage their own state, then
              compose them to make complex UIs.
            </CardDescription>
          </CardContent>
        </Card> */}
      {/* Virtual DOM */}
      {/* <Card className="border-border">
          <CardHeader>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Virtual DOM</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              {`React's virtual DOM implementation ensures optimal performance
                  and smooth user experiences.`}
            </CardDescription>
          </CardContent>
        </Card> */}
      {/* Declarative */}
      {/* <Card className="border-border">
          <CardHeader>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Declarative</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Design simple views for each state in your application, and React
              will efficiently update and render components.
            </CardDescription>
          </CardContent>
        </Card> */}
      {/* Learn Once, Write Anywhere */}
      {/* <Card className="border-border">
          <CardHeader>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Universal</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              React can render on the server using Node and power mobile apps
              using React Native.
            </CardDescription>
          </CardContent>
        </Card> */}
      {/* </div> */}
    </div>
  );
}

export default FeatureSection;
