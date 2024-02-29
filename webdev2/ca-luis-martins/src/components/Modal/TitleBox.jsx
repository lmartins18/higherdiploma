import { CloseButton } from './CloseButton';
import { Title } from './Title';

export const TitleBox = ({ onClose, title }) => (
    <div>
        <div className="flex justify-end">
            <CloseButton onClose={onClose} />
        </div>
        <div className="text-left">
            <Title title={title} />
            <hr />
        </div>
    </div>
)