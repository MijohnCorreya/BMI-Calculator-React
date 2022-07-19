import { queryByTestId , querySelectorByPlaceHolder, queryByPlaceHolderText} from "@testing-library/react"

it('renders',()=>{
    const {queryByTestId, queryByPlaceHolderText} = render(</>)
    expect(queryByTestId("searchbox")).toBeTruthy()
})

describe('Input Value',()=>{
    it('search values correctly',()=>{
        const {querySelectorByPlaceHolder} = renders(</>);
        const searchBox = querySelectorByPlaceHolder('serch here');

        fireEvent.change(searchBox, {target:{value : "true"}})
        expect(searchBox.value).toBe("true")
    })
})