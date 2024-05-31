interface Register {
  textfields: Text[]
  selectfields: Select[]
}

interface Text {
  xs?: number;
  className?: string;
  htmlfor?: string;
  dataname?: string;
  type?: string;
  id?: string;
}

interface Select {
  xs?: number;
  className?: string;
  htmlfor?: string;
  dataname?: string;
  id?: string;
  options: Option[];
}

interface Option {
  value: string;
  label: string;
}

const dataRegister: Register = {
  textfields: [
    {
      xs: 3,
      className: 'input-content',
      htmlfor: 'firstname',
      dataname: 'First name*',
      type: 'text',
      id: 'firstname'
    },
    {
      xs: 3,
      className: 'input-content',
      htmlfor: 'middlename',
      dataname: 'Middle name*',
      type: 'text',
      id: 'middlename'
    },
    {
      xs: 3,
      className: 'input-content',
      htmlfor: 'lastname',
      dataname: 'Last name*',
      type: 'text',
      id: 'lastname'
    },
    {
      xs: 3,
      className: 'input-content',
      htmlfor: 'second-lastname',
      dataname: 'Second last name*',
      type: 'text',
      id: 'second-lastname'
    },
  ],
  selectfields: [
    {
      xs: 3,
      className: 'input-content',
      htmlfor: 'docuement-type',
      dataname: 'Document type*',
      id: 'gender',
      options: [
        { value: '', label: 'Tipo de documento' },
        { value: 'cc', label: 'CC' },
        { value: 'ce', label: 'CE' },
        { value: 'pep', label: 'PEP' },
        { value: 'pa', label: 'PA' },
        { value: 'nit', label: 'NIT' },
      ]
    }
  ]
}

export default dataRegister;
