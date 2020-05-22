import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div>{data.map(entry => renderEntry(entry))}</div>
    </div>
  );
}

const renderEntry = entry => {
  if (entry.type === "Literal") {
    return renderLiteral(entry);
  }

  if (entry.type === "Array") {
    return (
      <>
        {renderArray(entry)}
        <span className="v-spacer-xl" />
      </>
    );
  }

  if (entry.type === "Object") {
    return (
      <>
        {renderObject(entry)}
        <span className="v-spacer-xl" />
      </>
    );
  }
};

//////////////////////////////

const renderObject = entry => {
  if (entry.value) {
    return (
      <div className="object-single">
        <strong className="literal">{entry.label || entry.key}:</strong>
        <span className="h-spacer-l" />
        <span>{renderEntry(entry.value)}</span>
      </div>
    );
  }

  return (
    <div className="object-multi">
      <strong className="literal">{entry.label || entry.key}</strong>
      <span className="v-spacer-l" />
      <div className="indent">
        <span className="h-spacer-xxl" />
        <div>{entry.children.map(c => renderEntry(c))}</div>
      </div>
    </div>
  );
};

//////////////////////////////

const renderArray = entry => {
  return entry.children.map((c, i) => {
    return <div className="pill">{renderEntry(c)}</div>;
  });
};

//////////////////////////////

const renderLiteral = entry => {
  return <span className="literal">{entry.value}</span>;
};

//////////////////////////////

const data = [
  {
    type: "Object",
    key: "sammlung",
    label: "Sammlung",
    value: {
      type: "Literal",
      value: "Run"
    }
  },
  {
    type: "Object",
    key: "titel",
    label: "Titel",
    value: {
      type: "Literal",
      value: "öln"
    }
  },
  {
    type: "Object",
    key: "objekt",
    label: "Obj",
    children: [
      {
        type: "Object",
        key: "fotograf_in",
        label: "FotografIn",
        value: {
          type: "Literal",
          value: "Hans-Peter"
        }
      },
      {
        type: "Object",
        key: "datierung",
        label: "Datierung",
        value: {
          type: "Literal",
          value: "1986-09-07"
        }
      },
      {
        type: "Object",
        key: "au",
        label: "A",
        value: {
          type: "Literal",
          value: "Depo"
        }
      }
    ]
  },
  {
    type: "Object",
    key: "inhal",
    label: "I",
    children: [
      {
        type: "Object",
        key: "beschreibung",
        label: "Beschreibung",
        value: {
          type: "Literal",
          value: "Luft"
        }
      }
    ]
  },
  {
    type: "Object",
    key: "zusa",
    label: "Z",
    children: [
      {
        type: "Object",
        key: "kr_ordnung",
        label: "KR-Ordnung",
        children: [
          {
            type: "Object",
            key: "E1",
            children: [
              {
                type: "Object",
                key: "$",
                value: {
                  type: "Literal",
                  value: "Köln"
                }
              },
              {
                type: "Object",
                key: "E2",
                children: [
                  {
                    type: "Object",
                    key: "$",
                    value: {
                      type: "Literal",
                      value: "Ansichten"
                    }
                  },
                  {
                    type: "Object",
                    key: "E3",
                    value: {
                      type: "Literal",
                      value: "1980iger"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        type: "Object",
        key: "copyright",
        label: "Copyright",
        value: {
          type: "Literal",
          value: "Run"
        }
      }
    ]
  }
];
