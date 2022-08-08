import { GetIcon } from './icons/ExportIcon'
import './App.css'
export default function App() {

  const SocialIcons = [
    { name: 'twitter', url: '', icon: 'twitter' },
    { name: 'facebook', url: '', icon: 'facebook' },
    { name: 'video', url: '', icon: 'video' },
    { name: 'discord', url: '', icon: 'discord' },
    { name: 'subscription', url: '', icon: 'subscription' },
    { name: 'telegram', url: '', icon: 'telegram' },
    { name: 'instagram', url: '', icon: 'instagram' },
    { name: 'reddit', url: '', icon: 'reddit' },
  ]

  return (
    <div className="container">
      <div className="innerContainer" >
        <div className='icons-container'>
          {
            SocialIcons.map(
              socialMediaIcon => {
                return (
                  <div className='icon-wrap'>
                    <a target={'_blank'} className='icon-link' href={socialMediaIcon.url} id={socialMediaIcon.name}>
                      {<GetIcon icon={socialMediaIcon.icon} trigger={null} />}
                    </a>
                  </div>
                )
              }
            )
          }
        </div>
      </div>
    </div>
  );
}