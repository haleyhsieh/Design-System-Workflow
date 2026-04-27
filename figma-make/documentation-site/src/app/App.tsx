import { useState } from 'react';
import { Overview } from './components/Overview';
import { ColorTokens } from './components/ColorTokens';
import { Typography } from './components/Typography';
import { Spacing } from './components/Spacing';
import { Buttons } from './components/Buttons';
import { FormInputs } from './components/FormInputs';
import { ComponentStates } from './components/ComponentStates';
import { TokenMapping } from './components/TokenMapping';
import { VersionLog } from './components/VersionLog';

type Section =
  | 'overview'
  | 'color-tokens'
  | 'typography'
  | 'spacing'
  | 'buttons'
  | 'form-inputs'
  | 'component-states'
  | 'token-mapping'
  | 'version-log';

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('overview');

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return <Overview />;
      case 'color-tokens':
        return <ColorTokens />;
      case 'typography':
        return <Typography />;
      case 'spacing':
        return <Spacing />;
      case 'buttons':
        return <Buttons />;
      case 'form-inputs':
        return <FormInputs />;
      case 'component-states':
        return <ComponentStates />;
      case 'token-mapping':
        return <TokenMapping />;
      case 'version-log':
        return <VersionLog />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-white flex-shrink-0 overflow-y-auto">
        <div className="p-6 border-b border-border">
          <h1 className="text-[20px] font-medium">Design System Documentation</h1>
          <p className="text-[14px] text-muted-foreground mt-1">Figma × Token × Git Workflow</p>
        </div>

        <nav className="p-4">
          <div className="mb-6">
            <h3 className="text-[11px] uppercase tracking-wider text-muted-foreground mb-2 px-3">OVERVIEW</h3>
            <button
              onClick={() => setActiveSection('overview')}
              className={`w-full text-left px-3 py-2 rounded-md text-[14px] transition-colors ${
                activeSection === 'overview'
                  ? 'bg-accent text-accent-foreground'
                  : 'text-foreground hover:bg-accent/50'
              }`}
            >
              Introduction
            </button>
          </div>

          <div className="mb-6">
            <h3 className="text-[11px] uppercase tracking-wider text-muted-foreground mb-2 px-3">FOUNDATION</h3>
            <div className="space-y-1">
              <button
                onClick={() => setActiveSection('color-tokens')}
                className={`w-full text-left px-3 py-2 rounded-md text-[14px] transition-colors ${
                  activeSection === 'color-tokens'
                    ? 'bg-accent text-accent-foreground'
                    : 'text-foreground hover:bg-accent/50'
                }`}
              >
                Color Tokens
              </button>
              <button
                onClick={() => setActiveSection('typography')}
                className={`w-full text-left px-3 py-2 rounded-md text-[14px] transition-colors ${
                  activeSection === 'typography'
                    ? 'bg-accent text-accent-foreground'
                    : 'text-foreground hover:bg-accent/50'
                }`}
              >
                Typography
              </button>
              <button
                onClick={() => setActiveSection('spacing')}
                className={`w-full text-left px-3 py-2 rounded-md text-[14px] transition-colors ${
                  activeSection === 'spacing'
                    ? 'bg-accent text-accent-foreground'
                    : 'text-foreground hover:bg-accent/50'
                }`}
              >
                Spacing
              </button>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-[11px] uppercase tracking-wider text-muted-foreground mb-2 px-3">COMPONENTS</h3>
            <div className="space-y-1">
              <button
                onClick={() => setActiveSection('buttons')}
                className={`w-full text-left px-3 py-2 rounded-md text-[14px] transition-colors ${
                  activeSection === 'buttons'
                    ? 'bg-accent text-accent-foreground'
                    : 'text-foreground hover:bg-accent/50'
                }`}
              >
                Button
              </button>
              <button
                onClick={() => setActiveSection('form-inputs')}
                className={`w-full text-left px-3 py-2 rounded-md text-[14px] transition-colors ${
                  activeSection === 'form-inputs'
                    ? 'bg-accent text-accent-foreground'
                    : 'text-foreground hover:bg-accent/50'
                }`}
              >
                Form Inputs
              </button>
              <button
                onClick={() => setActiveSection('component-states')}
                className={`w-full text-left px-3 py-2 rounded-md text-[14px] transition-colors ${
                  activeSection === 'component-states'
                    ? 'bg-accent text-accent-foreground'
                    : 'text-foreground hover:bg-accent/50'
                }`}
              >
                Component States
              </button>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-[11px] uppercase tracking-wider text-muted-foreground mb-2 px-3">RESOURCES</h3>
            <div className="space-y-1">
              <button
                onClick={() => setActiveSection('token-mapping')}
                className={`w-full text-left px-3 py-2 rounded-md text-[14px] transition-colors ${
                  activeSection === 'token-mapping'
                    ? 'bg-accent text-accent-foreground'
                    : 'text-foreground hover:bg-accent/50'
                }`}
              >
                Token Mapping
              </button>
              <button
                onClick={() => setActiveSection('version-log')}
                className={`w-full text-left px-3 py-2 rounded-md text-[14px] transition-colors ${
                  activeSection === 'version-log'
                    ? 'bg-accent text-accent-foreground'
                    : 'text-foreground hover:bg-accent/50'
                }`}
              >
                Version Log
              </button>
            </div>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main
        className="flex-1 overflow-y-auto"
        style={{
          background: `
            linear-gradient(
              180deg,
              #f7f8fa 0%,
              #f3f5f7 100%
            )
          `
        }}
      >
        <div className="max-w-5xl mx-auto p-8">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
