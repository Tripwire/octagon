## Table Generic

    const Table = require('semantic-ui-react').Table;
    <Table selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Header</Table.HeaderCell>
          <Table.HeaderCell>Header</Table.HeaderCell>
          <Table.HeaderCell>Header</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>

## Table Hover States

    const Table = require('semantic-ui-react').Table;
    <Table selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Header</Table.HeaderCell>
          <Table.HeaderCell>Header</Table.HeaderCell>
          <Table.HeaderCell>Header</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row positive>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
        <Table.Row error>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>

## Table Sortable

    const Table = require('semantic-ui-react').Table;
    <Table selectable sortable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell sorted='ascending'>Header</Table.HeaderCell>
          <Table.HeaderCell>Header</Table.HeaderCell>
          <Table.HeaderCell>Header</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>A</Table.Cell>
          <Table.Cell>B</Table.Cell>
          <Table.Cell>C</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>D</Table.Cell>
          <Table.Cell>E</Table.Cell>
          <Table.Cell>F</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
